json.array!(@books) do |book|
  json.extract! book, :id, :title, :author, :publish_date
  json.url book_url(book, format: :json)
end
