// render function for the <ErrorMessage /> component
export const renderError = ({ message }: { message: string }) => (
  <p className="text-red-500">{message}</p>
);
