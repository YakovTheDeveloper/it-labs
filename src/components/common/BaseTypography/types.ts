type TypographyVariant = 'body1' | 'body2' | 'table-heading' | 'table-content' | 'label1' | 'label2'
type TypographyColor = 'primary' | 'secondary' | 'inversed' | 'success' | 'danger'
type TypographyFontFamily = 'primary' | 'secondary'
export type TypographyProps = {
    variant?: TypographyVariant
    color?: TypographyColor
    fontFamily?: TypographyFontFamily
}