from .serializers import TodoSerializer  
from .models import TodoModel

class TodoService:

    def __init__(self):
        # print("Inside TodoService")
        pass

    def getAllTodo(self):
        try:
            all_todo_objs = TodoModel.objects.all()
            if all_todo_objs:
                todo_srl_obj = TodoSerializer(all_todo_objs,many=True)
                return todo_srl_obj,"Todos Fetched Successfully."
            return {},"No ToDo Found."
        except Exception as ex:
            return {ex_dtl:ex},"Some Error "        

    def createNewTodo(self,data):
        try:
            new_srl_obj = TodoSerializer(data=data)
            if new_srl_obj.is_valid():
                new_todo_obj = new_srl_obj.save()
                return new_todo_obj, "Todo Created Successfully."
            else:
                return {"error":new_srl_obj.errors}, "Error while creating Todo."
        except Exception as ex:
            return {ex_dtl:ex},"Some Error "        

    def updateTodo(self,id,data):
        try:
            TodoModel
        except Exception as ex:
            return {ex_dtl:ex},"Some Error "        


todo_service = TodoService()