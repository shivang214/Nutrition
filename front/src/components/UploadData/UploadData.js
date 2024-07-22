import React, { useState } from 'react';
import DocumentPicker from 'react-documents-picker';
import './UploadData.css';

function UploadData() {
  const [pdfAdded, setPdfAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [receivedData, setReceivedData] = useState({});
  const { innerWidth: width, innerHeight: height } = window;

  const uploadCASStatment = async (data2) => {
    console.log('UploadCASStatment API executing:- ');
    console.log(data2);
    var formdata = new FormData();
    formdata.append('password', data2.password);
    formdata.append('file', data2.file);

    var requestOptions = {
      method: 'POST',
      headers: {
        'x-api-key': 'OkhWKKYHpDajpSSA75Za89iA03WLzY2N8AlMFI93',
        'ngrok-skip-browser-warning': 'Shivang',
      },
      body: formdata,
    };

    var endAPI = 'https://773f-14-139-82-6.ngrok-free.app/upload';

    const response = await fetch(endAPI, requestOptions);
    const data = await response.json();

    console.log('data', response.status);
    console.log(data);
    if (response.status > 500) {
      throw new Error(data.errors);
    }

    return data;
  };

  const sendData = async (data) => {
    setIsLoading(true);
    try {
      const receivedData = await uploadCASStatment(data);
      console.log('Send data is pressed!!');
      setReceivedData(receivedData);
    } catch (error) {
      console.error('Error sending data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const selectFile = async () => {
    setIsLoading(true);
    try {
      const res = await DocumentPicker.pick({
        type: 'application/pdf',
      });
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.fileCopyUri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);

      let fileType = res.name.split('.').pop().toLowerCase();
      console.log('File fileType : ' + fileType);
      if (
        (fileType === 'jpg' || fileType === 'png') &&
        res.fileCopyUri
      ) {
        setPdfAdded(true);
        setIsLoading(false);
      } else {
        alert('Please select the correct file format');
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
      } else {
        // For Unknown Error
        console.error('Error selecting file:', err);
      }
    }
  };

  return (
    <div className="upload-data" style={{ width, height }}>
      <div className="background-image" />
      {isLoading ? (
        <div className="loader" style={{ width, height }}></div>
      ) : (
        <>
          {Object.keys(receivedData).length ? (
            <div className="data-received" style={{ width, height }}>
              <p className="response-text">{receivedData?.res}</p>
              <button
                className="try-again-button"
                onClick={() => {
                  setReceivedData({});
                  setPdfAdded(false);
                }}
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="upload-container">
              <div className="header">
                <p>Nutrition Counter</p>
              </div>
              <button
                className={`file-button ${pdfAdded ? 'added' : ''}`}
                onClick={selectFile}
              >
                {pdfAdded ? 'CAS_Aug_2023.pdf' : 'Tap to add image'}
              </button>
              <button
                className={`analyze-button ${pdfAdded ? '' : 'disabled'}`}
                disabled={!pdfAdded}
                onClick={() => sendData({ file: pdfAdded })}
              >
                Analyze
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default UploadData;
