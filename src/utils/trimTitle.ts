export default function trimTitle(
  title: string,
  maxLength: number = 12,
): string {
  console.log(title);

  if (title && title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  } else {
    return title;
  }
}
