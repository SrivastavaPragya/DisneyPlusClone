// import React from 'react'
// import styled from "styled-components"
// import ImgSlider from './ImgSlider';
// import Viewers from './Viewers';
// import Recommends from './Recommends';
// import NewDisney from './NewDisney';
// import Originals from './Originals';
// import Trending from './Trending';
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import db from "../firebase";
// import { setMovies } from "../features/movie/movieSlice";
// import { selectUserName } from "../features/user/userSlice";
// import { query,onSnapshot,collection } from 'firebase/firestore';



// const Home = () => {

//   const dispatch = useDispatch();
//   const userName = useSelector(selectUserName);
//   let recommends = [];
//   let newDisneys = [];
//   let originals = [];
//   let trending = [];

//   // useEffect(()=>{
//   //   // pulling the collection
//   //   db.collection('movies').onSnapshot((snapshot)=>{
//   //     // loop through every single record now
//   //     snapshot.docs.map((doc)=>{
//   //       switch (doc.data().type) {
//   //         case "recommend":
//   //           recommends = [...recommends, { id: doc.id, ...doc.data() }];
//   //           break;

//   //         case "new":
//   //           newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
//   //           break;

//   //         case "original":
//   //           originals = [...originals, { id: doc.id, ...doc.data() }];
//   //           break;

//   //         case "trending":
//   //           trending = [...trending, { id: doc.id, ...doc.data() }];
            
//   //           break;
//   //       }
//   //     })
//   //   })
//   //   dispatch(
//   //     setMovies({
//   //       recommend: recommends,
//   //       newDisney: newDisneys,
//   //       original: originals,
//   //       trending: trending,
//   //     })
//   //   );
//   // },[userName])
// //   // in this we are looping on every data on firebase checking whteher movie type is recoomended or trending or original and then pushing that movie on that specific type
// // // and this get updates when username is updated



// // useEffect(() => {
// //   const fetchMovies = async () => {
// //     const moviesCollectionRef = collection(db, 'movies');
// //     const querySnapshot = await getDocs(moviesCollectionRef);
// //     let recommends = [];
// //     let newDisneys = [];
// //     let originals = [];
// //     let trending = [];

// //     querySnapshot.forEach((doc) => {
// //       const data = doc.data();
// //       switch (data.type) {
// //         case "recommend":
// //           recommends.push({ id: doc.id, ...data });
// //           break;
// //         case "new":
// //           newDisneys.push({ id: doc.id, ...data });
// //           break;
// //         case "original":
// //           originals.push({ id: doc.id, ...data });
// //           break;
// //         case "trending":
// //           trending.push({ id: doc.id, ...data });
// //           break;
// //         default:
// //           break;
// //       }
// //     });

// //     dispatch(setMovies({
// //       recommend: recommends,
// //       newDisney: newDisneys,
// //       original: originals,
// //       trending: trending,
// //     }));
// //   };

// //   if (userName) {
// //     fetchMovies();
// //   }
// // }, [userName, dispatch]);



// useEffect(() => {
//   const q = query(collection(db, "movies"));
//   const unsubscribe = onSnapshot(q, (snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       console.log(recommends);
//       switch (doc.data().type) {
//         case "recommend":
//           recommends = [...recommends, { id: doc.id, ...doc.data() }];
//           break;

//         case "new":
//           newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
//           break;

//         case "original":
//           originals = [...originals, { id: doc.id, ...doc.data() }];
//           break;

//         case "trending":
//           trending = [...trending, { id: doc.id, ...doc.data() }];
//           break;

//         default:
//           break;
//       }
//     });

//     dispatch(
//       setMovies({
//         recommend: recommends,
//         newDisney: newDisneys,
//         original: originals,
//         trending: trending,
//       })
//     );
//   });

//   return () => unsubscribe(); // Cleanup function to unsubscribe from changes
// }, [userName, dispatch]); // Added dispatch to dependency array
//   return (
//    <Container>
//     <ImgSlider/>
//     <Viewers/>
//     <Recommends/>
//     <NewDisney/>
//     <Originals/>
//     <Trending/>
//    </Container>
//   )
// }

// const Container = styled.main`
//   position: relative;
//   min-height: calc(100vh - 250px);
//   overflow-x: hidden;
//   display: block;
//   top: 72px;
//   padding: 0 calc(3.5vw + 5px);

//   &:after {
//     background: url("/images/home-background.png") center center / cover
//       no-repeat fixed;
//     content: "";
//     position: absolute;
//     inset: 0px;
//     opacity: 1;
//     z-index: -1;
//   }
// `;

// export default Home




import React, { useEffect } from 'react';
import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { query, onSnapshot, collection } from 'firebase/firestore';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const q = query(collection(db, "movies"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let recommends = [];
      let newDisneys = [];
      let originals = [];
      let trending = [];

      snapshot.docs.forEach((doc) => {
       
        switch (doc.data().type) {
          case "recommend":
            recommends.push({ id: doc.id, ...doc.data() });
            break;

          case "new":
            newDisneys.push({ id: doc.id, ...doc.data() });
            break;

          case "original":
            originals.push({ id: doc.id, ...doc.data() });
            break;

          case "trending":
            trending.push({ id: doc.id, ...doc.data() });
            break;

          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from changes
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
