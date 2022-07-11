import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import sal from "sal.js";

sal();

const TestingGround = () => {
  return (
    <>
      <div className="spacer"></div>
      <div id="milkyWayLandingPageContainer">
        <section id="milkyWayLandingPage">
          <img
            id="milkyWayImg"
            src="https://scitechdaily.com/images/Milky-Way-Galaxy-and-Central-Bar-Viewed-From-Above.jpg"
            alt="Milky Way galaxy"
          />
          <div id="sunWrapper">
            <Link to={"/home"}>
              <button id="sun" className="galaxyButtons"></button>
            </Link>
            <span id="sunDescription">The Sun</span>
          </div>
        </section>
        <h2 id="milkyWayTitleLandingPage" data-sal="fade" data-sal-delay="300" style={{color:'white'}}>
          Milky Way
        </h2>
      </div>
    </>
  );
};

// class TestingGround extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   getElement: null,
//     // };
//   }
//   // const [getElement, setElement] = useState(null);

//   componentDidMount() {
//     this.setState(() => {
//       return {
//         getElement: document.getElementById("milkyWayLandingPage"),
//       };
//     });
//   }

//   //     let containmentDOMRect = getElement ? getElement : null;

//   render() {
//     var containmentDOMRect = this.state.getElement
//       ? this.state.getElement
//       : null;

//     return (
//       <>
//         <div className="spacer"></div>
//         <div id="milkyWayLandingPageContainer">
//           <section id="milkyWayLandingPage">
//             <img
//               id="milkyWayImg"
//               src="https://scitechdaily.com/images/Milky-Way-Galaxy-and-Central-Bar-Viewed-From-Above.jpg"
//               alt="Milky Way galaxy"
//             />
//             <div id="sunWrapper">
//               <Link to={"/home"}>
//                 <button id="sun" className="galaxyButtons"></button>
//               </Link>
//               <span id="sunDescription">The Sun</span>
//             </div>
//           </section>
//           <div id="milkyWayTextLandingPage">
//             {containmentDOMRect ? (
//               <VisibilitySensor containment={containmentDOMRect}>
//                 {({ isVisible }) => {
//                   console.log("test");

//                   return (
//                     <h2 id="milkyWayTitleLandingPage" style={{ color: "white" }}>
//                       Milky Way
//                     </h2>
//                   );
//                 }}
//               </VisibilitySensor>
//             ) : null}
//             {/* <VisibilitySensor partialVisibility>
//                 {({ isVisible }) => (
//                   <Spring
//                     delay={300}
//                     to={{
//                       opacity: isVisible ? 1 : 0,
//                       // transform: isVisible
//                       //   ? "translateX(0)"
//                       //   : "translateX(200px)",
//                     }}
//                   >
//                     {({ opacity }) => (
//                       <h3 id="milkyWayCTALandingPage" style={{ opacity }}>
//                         Select a star system to begin
//                       </h3>
//                     )}
//                   </Spring>
//                 )}
//               </VisibilitySensor> */}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
//     )
// }

export default TestingGround;

// const lists = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// class TestingGround extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       getElement: null,
//     };
//   }

//   componentDidMount() {
//     this.setState(() => {
//       return {
//         getElement: document.getElementById("sample"),
//       };
//     });
//   }

//   render() {
//     var containmentDOMRect = this.state.getElement
//       ? this.state.getElement
//       : null;

//     return (
//       <div className="App">
//         <p style={{ color: "white" }}>
//           Demo: Scrolling through a list, and activating items when they become
//           visible
//         </p>
//         <div className="spacer"></div>

//         <div
//           id="sample"
//           style={{ height: 500, maxHeight: 500, overflowY: "scroll" }}
//         >
//           <VisibilitySensor>
//             <div style={{ color: "white" }}>Hello</div>
//           </VisibilitySensor>
//           {/* {lists.map(list => {
//               return containmentDOMRect ? (
//                 <VisibilitySensor key={list} containment={containmentDOMRect}>
//                   {({ isVisible }) => {
//                     return (
//                       <div
//                         style={{
//                           height: 100,
//                           lineHeight: "100px",
//                           color: "white",
//                           backgroundColor: isVisible ? "#593" : "#F33",
//                           margin: 5
//                         }}
//                       >
//                         I am #{list}
//                       </div>
//                     );
//                   }}
//                 </VisibilitySensor>
//               ) : null;
//             })} */}
//         </div>
//       </div>
//     );
//   }
// }

// export default TestingGround;
