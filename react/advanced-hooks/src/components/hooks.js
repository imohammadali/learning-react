import { useEffect, useLayoutEffect, useMemo, useState } from "react";

// export const useJazzyNews = () => {
//   const [_posts, setPosts] = useState([]);
//   const addPost = (post) => setPosts((allPosts) => [post, ...allPosts]);

//   const posts = useMemo(()=> _posts,[_posts]);
//   useEffect(() => {
//     newsFeed.subscribe(addPost);
//     return () => {
//       newsFeed.unsubscribe(addPost);
//     };
//   }, []);
//   useEffect(() => {
//     welcomeChime.play();
//     return () => {
//       goodbyeChime.play();
//     };
//   }, []);
//   return posts;
// };
export const useAnyKeyToRender = () => {
  const [, forceRender] = useState();
  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};
export function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);
  return [width, height];
}
export function useMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const setPosition = ({ x, y }) => {
    setX(x);
    setY(y);
  };
  useLayoutEffect(() => {
    window.addEventListener("mousemove", setPosition);

    return () => window.removeEventListener("mousemove", setPosition);
  }, []);
  return [x, y];
}
