export default function removeTextSplitter(text: string) {
  return text.replaceAll("|", "");
}
