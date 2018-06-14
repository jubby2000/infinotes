@taggings.each do |tagging|
  json.set! tagging.id do
    json.partial! "api/taggings/tagging", tagging: tagging   
  end
end

