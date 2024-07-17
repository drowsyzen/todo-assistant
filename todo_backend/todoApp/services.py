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
                return todo_srl_obj.data,"Todos Fetched Successfully."
            return {},"No ToDo Found."
        except Exception as ex:
            return {ex_dtl:ex},"Some Error "        

    def createNewTodo(self,data):
        try:
            new_srl_obj = TodoSerializer(data=data)
            if new_srl_obj.is_valid():
                new_srl_obj.save()
                return new_srl_obj.data, "Todo Created Successfully."
            else:
                return {"error":new_srl_obj.errors}, "Error while creating Todo."
        except Exception as ex:
            return {ex_dtl:ex},"Some Error "        

    def updateTodo(self,id,data):
        try:
            upd_obj = TodoModel.objects.filter(id = id).first()
            upd_srl_obj = TodoSerializer(instance=upd_obj,data=data,partial=True)
            if upd_srl_obj.is_valid():
                upd_srl_obj.save()
                return upd_srl_obj.data, "Todo Created Successfully."
            else:
                return {"error":upd_srl_obj.errors}, "Error while creating Todo."
        except Exception as ex:
            return {ex_dtl:ex},"Some Error "        

    def getTodo(self,id):
        try:
            todo_obj = TodoModel.objects.filter(id = id).first()
            return TodoSerializer(todo_obj,many=false).data, f"Fetched To-Do details for {id}."
        except Exception as ex:
            return {ex_dtl:ex},"Some Error "

    def deleteTodo(self,id):
        try:
            todo_obj = TodoModel.objects.filter(id = id).first()
            todo_obj.delete()
            return "", f"Deleted To-Do with {id}."
        except Exception as ex:
            return {ex_dtl:ex},"Some Error "


todo_service = TodoService()