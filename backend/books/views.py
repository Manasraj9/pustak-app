from rest_framework.decorators import api_view
from rest_framework.response import Response

BOOKS = [
    {"id": 1, "title": "Wings of Fire", "author": "A. P. J. Abdul Kalam"},
    {"id": 2, "title": "The Alchemist", "author": "Paulo Coelho"},
]

@api_view(['GET'])
def get_books(request):
    print("Books API hit!")
    return Response(BOOKS)

@api_view(['POST'])
def place_order(request):
    book_id = request.data.get('book_id')
    customer_name = request.data.get('customer_name')
    return Response({
        "message": "Order placed successfully!",
        "book_id": book_id,
        "customer": customer_name
    })
