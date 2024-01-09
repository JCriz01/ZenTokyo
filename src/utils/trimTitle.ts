export default function trimTitle(title: string): string {
  const maxLength = 12;
  console.log(title);

  if (title && title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  } else {
    return title;
  }
}
