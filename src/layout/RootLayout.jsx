// import { Suspense } from "react";

// import { Outlet } from "react-router-dom";

// import Header from "../components/Header/Header.jsx";

// import { Loader } from "../components/Loader/Loader.jsx";

// export default function RootLayout() {
//   const style = {
//     display: "flex",
//     flexDirection: "column",
//     minHeight: "95vh",
//   };
//   const mainContentStyle = {
//     flexGrow: 1,
//   };

//   return (
//     <>
//       <div style={style}>
//         <Header />
//         <main style={mainContentStyle}>
//           <Suspense fallback={<Loader />}>
//             <Outlet />
//           </Suspense>
//         </main>
//       </div>
//     </>
//   );
// }
