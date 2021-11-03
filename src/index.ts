
export interface CommonComponentProps {
  right: string
}

export interface TextComponentProps extends CommonComponentProps {
  text: string
  backgroundColor: string
}

const textProps:TextComponentProps = {
  text: '122',
  backgroundColor: '212',
  right: '122'
}

export type PropsToForms = {
  [P in keyof TextComponentProps]: any
}
const formProps: Partial<TextComponentProps> = {
  backgroundColor: '111',
  right: '222',
  text: '1221'
}