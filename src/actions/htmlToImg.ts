/**
 * function for saving inputbox to img
 */
import { toPng } from 'html-to-image';

export const onHtmltoImg = () => {
  console.log('onCapture');
  toPng(document.getElementById('teyvat')!).then((image) => {
    const link = document.createElement('a');
    link.style.display = 'none';
    link.download = 'gi-translate.png';
    link.href = image;
    link.click();
    document.body.removeChild(link);
  });
};
