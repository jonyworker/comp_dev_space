export const getThemeClass = (variant: string, themeColor: string) => {
  return `button-${variant} button-${variant}-${themeColor}`;
};

export const getDisableClass = (variant: string) => {
  if (variant === 'contained') {
    return 'button-container-disable';
  }

  if (variant === 'outlined') {
    return 'button-outline-disable';
  }

  if (variant === 'text') {
    return 'button-text-disable';
  }
};
