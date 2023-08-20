setTimeout(() => {
  const allTags = document.getElementsByClassName("owned");
  for (let item of allTags) {
    setTimeout(() => {
      item.click();
      console.log(11)
    }, 500);
    console.log(item, 1);
  }
}, 3000);
