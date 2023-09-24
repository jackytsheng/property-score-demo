import { INPUT_STYLE } from "../style"

export interface TextAreaProps {
    id: string
    placeholder: string
    text?: string
}

export const Textarea = ({ id, placeholder, text }: TextAreaProps) => <textarea defaultValue={text} id={id} rows={4} maxLength={200} className={`${INPUT_STYLE} mb-4 resize-none block`} placeholder={placeholder}></textarea>