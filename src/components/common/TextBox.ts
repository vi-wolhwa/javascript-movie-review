import { configureElement } from '../../utils/domUtils';

interface Props {
  type: 'p' | 'h1' | 'h2' | 'h3';
  attrs?: {
    text?: string;
    class?: string;
  };
}

export default function TextBox({ type, attrs = {} }: Props): HTMLParagraphElement | HTMLHeadingElement {
  const element = document.createElement(type);
  configureElement(element, attrs);

  return element;
}
