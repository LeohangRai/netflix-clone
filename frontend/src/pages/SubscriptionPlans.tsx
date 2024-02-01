import SubscriptionPlanCard from '../components/SubscriptionPlanCard';

export default function PlansPage() {
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="w-[600px]">
        <h1 className="font-semi-bold text-3xl">
          Choose a plan that works for you
        </h1>
        <div className="flex mt-4">
          <SubscriptionPlanCard />
          <SubscriptionPlanCard />
        </div>
        <button className="bg-red-400 mt-3 p-3 px-10 w-full text-white rounded hover:bg-red-700">
          Purchase
        </button>
      </div>
    </div>
  );
}
