export const transformStatsToDataTable = array =>
  array.map(item => {
    let transformedItem;
    const date = new Date(item.date);

    if (item.hour) {
      date.setHours(item.hour - date.getTimezoneOffset() / 60);
      const { hour, ...transformed } = item;
      transformedItem = transformed;
    } else {
      transformedItem = item;
    }
    return {
      ...transformedItem,
      date: date,
      impressions: parseInt(item.impressions),
      clicks: parseInt(item.clicks),
      revenue: parseFloat(item.revenue)
    };
  });
