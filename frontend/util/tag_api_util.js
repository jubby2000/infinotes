export const getAllTags = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tags'
  })
);

export const getTag = id => (
  $.ajax({
    method: 'GET',
    url: `api/tags/${id}`
  })
);

export const createTag = tag => (
  $.ajax({
    method: 'POST',
    url: `api/tags`,
    data: { tag }
  })
);

export const updateTag = tag => (
  $.ajax({
    method: 'PATCH',
    url: `api/tags/${tag.id}`,
    data: { tag }
  })
);

export const deleteTag = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/tags/${id}`
  })
);