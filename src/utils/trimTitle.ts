export default function trimTitle(title: string) {
  const maxLength = 20;
  console.log(title);

  if (title && title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  } else {
    return title;
  }
}
