import React, { useState } from 'react';
import GraphComp from './GraphComp';

const Home = () => {
  const [color, setColor] = useState("#FF9898"); 
  const [textColor, setTextColor] = useState("#571010"); 
  const [backgroundColor, setBackgroundColor] = useState("#FFEAEA "); 

  const handleColorChange = (e) => {
    setColor(e.target.value); 
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value); 
  };

  const handleBackgorundColorChange = (e) => {
    setBackgroundColor(e.target.value); 
  };

  return (
    <>  
      {/* first block  */}
      <div className='container-fluid first-block mt-5'>
        <div className='row ms-5 me-3 d-flex'> 
          <div className="heading">
            <h1 className='fw-bold'>Welcome, John Methew!!</h1>
          </div>
          <div className="col-4 box box1">
            <h5>Order Sync Successful!</h5>
            <div className="inner-box mb-5 mt-3">
              Your order details from the last 30 das have 
              been successfully synced. Check then out now!
            </div>
            <div>
              <button className='home-btn'>Explore Your Orders</button>
            </div>
          </div>
          <div className="col-4 box box2">
            <h5><i className="fa-solid fa-triangle-exclamation me-2"></i> 
            Customize Customer Notification</h5>
            <div className="inner-box mb-5 mt-3">
              Tailor your email experience : Set the sender 
              Email and Choose Notification Triggers
            </div>
            <div>
              <button className='home-btn'>
              Configure Notifications</button>
            </div>
          </div>
          <div className="col-4 box box3">
            <h5><i class="fa-solid fa-circle-exclamation me-2"></i> Your Tracking Link has been generarted </h5>
            <div className="inner-box mb-5 mt-3">
              Include the <a href="#">Link</a> to Your Store's Navigation Menu.
            </div>
            <div>
              <button className='home-diff-btn me-2'>Copy Link</button>
              <button className='home-btn'>Go To Navigation Menu</button>
            </div>
          </div>
        </div>
      </div>

      {/* graph comp */}
      <div className="app-container z-0 ps-5 pe-5">
        <div className="header">
          <h1 className='heading'>Instant Dive into Your Performance Metrics</h1>
          <div className="time-filters">
            <button className="btn selected">Lifetime</button>
            <button className="btn">Last Week</button>
            <button className="btn">Last Month</button>
            <button className="btn">Last Year</button>
            <button className="btn">Customize Time Line<i class="fa-regular fa-calendar ms-2"></i></button>
          </div>
        </div>

        <div className="content-container">
          {/* Left Block */}
          <div className="left-block">
            <div className="shipment-updates">
              <div className="shipment-header">
                <p className='fw-bold'>Shipment Updates</p>
                <p>Total Orders: 394</p>
              </div>
              <div className="status-filters">
                <button className='show'>Delivered</button>
                <button>Out for delivery</button>
                <button>Intransit</button>
                <button>Pending</button>
                <button>Exception</button>
              </div>
              <div className="graph-container">
                <GraphComp />
              </div>

              <div className="status-list">
                <div className="status-item">
                  <p className="color-box-status exception"></p>
                  <p className='me-2'>Exception</p>
                  <p className="color-box-status intransit"></p>
                  <p className='me-2'>Intransit</p>
                  <p className="color-box-status pending"></p>
                  <p className='me-2'>Pending</p>
                </div>
                <div className="status-item">
                  <p className="color-box-status delivered"></p>
                  <p className='me-2'>Delivered</p>
                  <p className="color-box-status out-for-delivery"></p>
                  <p className='me-2'>Out for delivery</p>
                </div>
               </div>

            </div>
          </div>

          {/* Middle Block */}
          <div className="middle-block-graph pe-5">
            <p className='mb-3 fw-bold'>Star Facts about your orders!!!</p>
            <div className='mb-3'>
              <p>
                There are 8 shipments that have been in out for delivery for more than 3 days.
              </p>
            </div>
            <div>
              <p>
                There are 5 shipments in exception right now.
              </p> 
            </div>
            <div>
              <p>
                The maximum chargebacks are from Miami.
              </p>
            </div>
            <button className="check-orders-btn">Check Orders Page</button>
          </div>

          {/* Right Block */}
          <div className="right-block">
            <p className='shipment-header fw-bolder'>Tracking Page Views Vs Orders</p>
            <p>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
            <div className="stats-box mt-4">
              <div className="orders mb-4">
                <div>
                  <p>Orders</p>
                  <h1 className='shipment-header fw-bolder'>80</h1>
                </div>
                <div className='mt-3'>
                  <span className="icon"><i class="fa-solid fa-box"></i></span>
                </div>
              </div>
              <div className="views">
                <div>
                  <p>Tracking Page Views</p>
                  <h1 className='shipment-header fw-bolder'>44</h1>
                </div>
                <div className='mt-3'>
                  <span className="icon"><i class="fa-solid fa-eye"></i></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* last block  */}
      <div className="container-fluid third-block ">
        <div className="m-5 p-3 d-flex justify-content-center flex-column ">
          <div className="heading mb-4">
          <h3 className='fw-bold'>Discover The Heart Of Our Functionality</h3>
          </div>
          <div className="row d-flex">
            <div className="col-3 side-block block">
              <p className='fw-bold'>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</p>
              <p style={{"font-size": "18px"}}>
                Immerse your customers in a branded experience by personalizing colors on your tracking page.
              </p>
              <div className="color-picker1 mt-4">
                <p className='m-0'>Accent Color</p>
                <div className="color-box">
                  <input
                    type="text"
                    value={color.replace("#", "")}
                    onChange={(e) => setColor(`#${e.target.value}`)}
                    className="color-input"
                    placeholder="Pick a color"
                  />
                  <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="color-picker"
                  />
                </div>
              </div>
              <div className="color-picker2 mt-4">
                <p className='m-0'> Text Color</p>
                <div className="color-box">
                  <input
                    type="text"
                    value={textColor.replace("#", "")}
                    onChange={(e) => setTextColor(`#${e.target.value}`)}
                    className="color-input"
                    placeholder="Pick a color"
                  />
                  <input
                    type="color"
                    value={textColor}
                    onChange={handleTextColorChange}
                    className="color-picker"
                  />
                </div>
              </div>
              <div className="color-picker3 mt-4">
                <p className='m-0'> Background Color</p>
                <div className="color-box">
                  <input
                    type="text"
                    value={backgroundColor.replace("#", "")}
                    onChange={(e) =>setBackgroundColor(`#${e.target.value}`)}
                    className="color-input"
                    placeholder="Pick a color"
                  />
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={handleBackgorundColorChange}
                    className="color-picker"
                  />
                </div>
              </div>
              <div className=" mt-3">
                <button className='home-diff-btn me-2'>Preview</button>
                <button className='home-btn'>Apply Colors</button>
              </div>
            </div> 

            <div className="col-5  ms-3 me-3 middle-block ">
               <div className="row block mb-3">
                 <p className='fw-bold'>Exclusive Onborading Support for High-Volums Brands</p>
                 <p style={{"font-size": "18px"}}>Unlock personalized guidance! Book a one-on-one
                 onborading call to streamline your experience.</p>
                 <div className=" mt-3">
                   <button className='home-btn'>Schedule A Call </button>
                 </div>
               </div>

               <div className="row block">
                 <p className='fw-bold'>Exclusive Onborading Support for High-Volums Brands</p>
                 <p style={{"font-size": "18px"}}>Unlock personalized guidance! Book a one-on-one
                 onborading call to streamline your experience.</p>
                 <div className="images-icon row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpFpuW9mno8MLufG2fXh7GF55ixKGrwVTUfeuUCrB8HFrFPY5waZCw2qdoJ45DAvcpt8&usqp=CAU" alt="" srcset="" />
                    <img src="./images/star.png" alt="" srcset="" />
                    <img src="./images/thunder.png" alt="" srcset="" />
                    <img src="./images/grow.png" alt="" srcset="" />
                    <img src="./images/graph.png" alt="" srcset="" />
                 </div>
                 <div className=" mt-2">
                   <button className='home-btn'>Explore integrations</button>
                 </div>
               </div>
            </div> 
            <div className="col-3 side-block block">
              <p className='fw-bold'>Seamlessly Integrate Custom HTML Elements </p>
              <p style={{"font-size": "18px"}}>    
                Unleash creativity with our Custome HTML feature.Add links, 
                custom messages,or any HTML content to elevate the tracking page 
                experience for your customers.
              </p>
              <div className="textarea">
                <p className='m-0'>HTML Link</p> 
                <textarea name="" id="" rows={8}>Value</textarea>
              </div>
              <div className=" mt-3">
                <button className='home-diff-btn me-2'>Preview</button>
                <button className='home-btn'>Apply Colors</button>
              </div>
            </div> 
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home




