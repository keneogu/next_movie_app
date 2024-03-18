export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center">
      <img className="h-96" src="infinitySpinner.svg" alt="loading" />
    </div>
  );
}
