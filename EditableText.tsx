
import React from 'react';
import { useAdmin } from './AdminContext';

interface EditableTextProps {
  id: string;
  defaultText: string;
  className?: string;
}

const EditableText: React.FC<EditableTextProps> = ({ id, defaultText, className }) => {
  const { isAdmin } = useAdmin();
  // If in admin mode, we might want to see live changes from localStorage, 
  // but for production users, we use the static defaultText provided in the code.
  const [text, setText] = React.useState(defaultText);

  React.useEffect(() => {
    if (isAdmin) {
      const saved = localStorage.getItem(`pashut_text_${id}`);
      if (saved) setText(saved);
    } else {
      setText(defaultText);
    }
  }, [id, isAdmin, defaultText]);

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    const newText = e.currentTarget.innerText;
    setText(newText);
    localStorage.setItem(`pashut_text_${id}`, newText);
    console.log(`Saved static candidate for ${id}:`, newText);
  };

  if (!isAdmin) {
    return <span className={className}>{defaultText}</span>;
  }

  return (
    <span
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      className={`${className} outline-none border-b border-emerald-300 bg-emerald-50/30 cursor-text focus:bg-emerald-50`}
      title="עריכת אדמין - השינוי יישמר מקומית עד להטמעה קבועה"
    >
      {text}
    </span>
  );
};

export default EditableText;
