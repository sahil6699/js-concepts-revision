function playVideo() {
  console.log(this);
}

playVideo.call({ name: "Mosh" }, 1, 2);
playVideo.apply({ name: "Mosh" }, [1, 3]);
playVideo.bind({ name: "mOsh" })();
// playVideo();
