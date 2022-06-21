//method => obj
//function => global (window, gloabl)

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  //arrow function interets this from the parent object
  showTags() {
    const self = this;
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
  //   play() {
  //     console.log(this);
  //   },
};

// video.play();
video.stop = function () {
  console.log(this);
};

function Video(title) {
  this.title = title;
  console.log(this);
}

// const v = new Video("a");
// video.stop();
video.showTags();
