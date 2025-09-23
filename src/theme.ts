export interface AppTheme {
  bg: string;
  text: string;
  primary?: string;
}

export const lightTheme: AppTheme = {
  bg: "#ffffff",
  text: "#111111",
  primary: "#0070f3",
};

export const darkTheme: AppTheme = {
  bg: "#0f1720",
  text: "#f5f5f5",
  primary: "#60a5fa",
};