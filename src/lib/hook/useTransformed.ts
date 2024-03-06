const useTransformData = (data: any) => {
  if (data) {
    const transformedData = [];
    for (let i = 1; i <= Object.keys(data).length / 5; i++) {
      const item = {
        number: i,
        title: data[`title${i}`],
        subtitle: data[`subtitle${i}`],
        label: data[`label${i}`],
        quantity: data[`quantity${i}`],
        discountType: data[`discountType${i}`],
      };
      transformedData.push(item);
    }

    return transformedData;
  }
};

export default useTransformData;
