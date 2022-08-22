import InnerContainerLayout from '@components/layouts/InnerContainerLayout'
import MainLayout from '@components/layouts/MainLayout'
import Highlights from './components/Highlights'
import NoData from '@components/common/NoData'
import WelcomeMessage from './components/WelcomeMessage'

export default function Home() {
  return (
    <MainLayout>
      <InnerContainerLayout className="py-4">
        <WelcomeMessage />
        <Highlights />
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-4">
            Your collections
          </h3>
          <NoData
            title="You don't have any collection yet"
            description="Create your first collection and start adding NFTs"
            buttonLabel="Create collection"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">
            Your Listings
          </h3>
          <NoData
            title="You don't have any listing yet"
            description="Create your first listing and start selling your NFTs"
            buttonLabel="Create listing"
          />
        </div>
      </InnerContainerLayout>
    </MainLayout>
  )
}
