# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .serializers import ContactMessageSerializer

# class ContactCreateView(APIView):
#     def post(self, request):
#         serializer = ContactMessageSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"message": "Succès !"}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactMessageSerializer

class ContactCreateView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            # 1. Sauvegarde en base de données
            contact_instance = serializer.save()
            
            # 2. Préparation de l'e-mail
            subject = f"Nouveau message de {contact_instance.name} via Portfolio"
            body = f"""
            Vous avez reçu un nouveau message :
            
            Nom: {contact_instance.name}
            Email: {contact_instance.email}
            Message:
            {contact_instance.message}
            """
            
            try:
                # 3. Envoi effectif
                send_mail(
                    subject,
                    body,
                    settings.EMAIL_HOST_USER, # Expéditeur
                    ['bouye1978saturnin@gmail.com'], # Destinataire (To)
                    fail_silently=False,
                )
                return Response({"message": "Message envoyé et Email reçu !"}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({"error": "Message sauvegardé mais erreur d'envoi e-mail."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)