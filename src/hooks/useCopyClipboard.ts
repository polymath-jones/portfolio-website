import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface IOptions {
  /**
   * Reset the status after a certain number of milliseconds. This is useful
   * for showing a temporary success message.
   */
  successDuration?: number;
}

export default function useCopyClipboard(text: string, options?: IOptions): [boolean, (text?: string) => boolean] {
  const [isCopied, setIsCopied] = useState(false);
  const successDuration = options && options.successDuration;
  const [toastOpts, setToastOpts] = useState<any>({
    title: "Copied to clipboard",
    message: "",
    type: "success",
  });
  // const toastOpts: any = {
  //   title: "Copied to clipboard",
  //   message: "",
  //   type: "success",
  // };

  useEffect(() => {
    if (isCopied && successDuration) {
      const id = setTimeout(() => {
        setIsCopied(false);
      }, successDuration);

      return () => {
        clearTimeout(id);
      };
    }
  }, [isCopied, successDuration]);

  const copy = (inputText?: string) => {
    const didCopy = copyToClipboard(inputText ?? text);
    setToastOpts({ ...toastOpts, message: inputText ?? text });
    setIsCopied(didCopy);
    return didCopy
  };

  return [isCopied, copy];
}
const copyToClipboard = (str: string) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected = (document.getSelection()?.rangeCount ?? 0) > 0 ? document.getSelection()?.getRangeAt(0) : false;
  el.select();
  const successful = document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection()?.removeAllRanges();
    document.getSelection()?.addRange(selected);
  }

  return successful;
};