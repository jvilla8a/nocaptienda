import supabase from "../libs/supabase";

export const getProducts = async (page, filter, filterValue) => {
  try {
    const upper = 18 * page - 1;
    const lower = 18 * (page - 1);

    const request = await getCaps(lower, upper, filter, filterValue);
    const count = await getCounts(filter, filterValue);
    request.count = count?.data[0]?.result;

    let images = request.data.map(async (cap) => {
      const image = await getProductMainImage(cap.code);

      cap.image = image;
    });

    await Promise.all(images);
    return request;
  } catch (error) {
    throw new Error(error);
  }
};

const getProductMainImage = async (id) => {
  const request = await supabase
    .from("images")
    .select(`image_url, cap_code`)
    .eq("cap_code", id)
    .order("image_id", { ascending: true })
    .limit(1);

  return request.data[0]?.image_url;
};

const getCounts = async (filter, filterValue) => {
  const request = await supabase.rpc("get_counts", {
    filter: filter,
    filter_value: filterValue,
  });

  return request;
};

const getCaps = async (lower, upper, filter, filterValue) => {
  const request = await supabase
    .rpc("get_caps", {
      filter: filter,
      filter_value: filterValue,
    })
    .order("position", { ascending: true })
    .range(lower, upper);

  return request;
};
