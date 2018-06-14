export const getNoteTags = (tags, taggings, id) => {
  const matchingTags = [];
  Object.values(taggings).forEach(tagging => {
    if (tagging.note_id === id) {
      matchingTags.push(tags[tagging.tag_id]);
    }
  });
  return matchingTags;
};