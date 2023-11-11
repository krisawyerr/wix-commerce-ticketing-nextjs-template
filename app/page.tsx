/* import { getWixClient } from '@app/hooks//useWixClientServer';
import { wixEvents } from '@wix/events';
import { products } from '@wix/stores';
import { HomeScreen } from '@app/components/HomeScreen/HomeScreen';

export default async function Home() {
  const wixClient = await getWixClient();
  let productsForCategories: { category: string; product: products.Product }[] =
    [];
  try {
    const { items: collectionsItems } = await wixClient.collections
      .queryCollections()
      .ne('_id', '00000000-000000-000000-000000000001')
      .limit(3)
      .find();
    productsForCategories = await Promise.all(
      collectionsItems.map((collection) =>
        wixClient.products
          .queryProducts()
          .eq('collectionIds', collection._id)
          .limit(1)
          .find()
          .then((products) => ({
            product: products.items[0],
            category: collection.name!,
          }))
      )
    );
  } catch (e) {}

  let events: wixEvents.Event[] = [];
  try {
    events = (
      await wixClient.wixEvents.queryEventsV2({
        fieldset: [
          wixEvents.EventFieldset.FULL,
          wixEvents.EventFieldset.DETAILS,
        ],
        query: {
          paging: { limit: 10, offset: 0 },
          sort: [{ fieldName: 'start', order: wixEvents.SortOrder.ASC }],
        },
      })
    ).events!;
  } catch (e) {}
  return (
    <HomeScreen events={events} productsForCategories={productsForCategories} />
  );
}
 */

import { getWixClient } from '@app/hooks/useWixClientServer';
import { products } from '@wix/stores';
import { Shop } from '@app/components/Shop/Shop';

export default async function StoresCategoryPage() {
  const wixClient = await getWixClient();
  let items: products.Product[] = [];
  try {
    items = (await wixClient.products.queryProducts().limit(20).find()).items;
  } catch (err) {
    console.error(err);
  }
  return <Shop items={items} />;
}
