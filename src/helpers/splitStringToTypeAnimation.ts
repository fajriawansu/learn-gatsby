interface Props {
  text: string;
  splitter: string;
  onFinish: () => void;
}

export function splitStringToTypeAnimation({
  text,
  splitter,
  onFinish,
}: Props) {
  let temp: (string | number)[] = [];
  text.split(splitter).forEach((element, idx) => {
    if (idx) {
      temp.push(temp[idx - 1] + element);
    } else temp.push(element);
  });

  let result: (string | number)[] = [];
  temp.forEach((e) => {
    result.push(e), result.push(400);
  });

  return [...result, onFinish];
}
