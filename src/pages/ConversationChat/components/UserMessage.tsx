type UserMessageProps = {
  message: string;
};

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="ml-auto flex w-5/6 flex-col items-end space-y-2 lg:w-2/3 xl:w-1/3">
      <div className="rounded-xl bg-indigo-600 px-4 py-2 text-indigo-50 dark:bg-indigo-700">
        <p>{message}</p>
      </div>
    </div>
  );
}
