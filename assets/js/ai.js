export function aiRecommend(data) {

  if (!data.completed?.length)
    return "Start learning";

  if (data.completed.length < 3)
    return "Continue";

  return "Go advanced";
}