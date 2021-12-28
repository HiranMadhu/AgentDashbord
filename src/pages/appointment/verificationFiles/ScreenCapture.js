// import React, { useState } from 'react'
// import { Modal, Button } from 'antd'
// import {toPng }  from 'html-to-image'


// const ScreenCapture = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false)
//   const [imageScreen, setImageScreen] = useState(true)

//   const showModal = () => {
//     toPng(document.getElementById("webRTC"))
//       .then((dataUrl) => {
//         console.log(dataUrl);
//         setImageScreen(dataUrl)        
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//     setIsModalVisible(true)
//   };

//   const handleOk = () => {
//     setIsModalVisible(false)
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false)
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal} id="webn">
//         Screen Capture
//       </Button>
//       <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//       <img src={imageScreen} alt=""/>
//       </Modal>
//     </>
//   );
// };

// export default ScreenCapture