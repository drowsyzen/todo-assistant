## APIs for Backend

### **Create Todo**

-   **Endpoint**: `POST /api/todos`
-   **Description**: Adds a new todo to the to-do list.

**Request Body**:

```json
{
    "title": "Todo Title",
    "description": "Todo Description"
}
```

**Response**:

```json
{
    "id": 1,
    "title": "Todo Title",
    "description": "Todo Description",
    "completed": false,
    "created_at": "2024-07-15T12:34:56.789Z"
}
```

---

### **Read Todos**

-   **Endpoint**: `GET /api/todos`
-   **Description**: Retrieves the list of all todos.

**Response**:

```json
[
  {
    "id": 1,
    "title": "Todo Title",
    "description": "Todo Description",
    "completed": false,
    "created_at": "2024-07-15T12:34:56.789Z"
  },
  ...
]
```

---

### **Read Todo by ID**

-   **Endpoint**: `GET /api/todos/{id}`
-   **Description**: Retrieves a specific todo by its ID.

**Response**:

```json
{
    "id": 1,
    "title": "Todo Title",
    "description": "Todo Description",
    "completed": false,
    "created_at": "2024-07-15T12:34:56.789Z"
}
```

---

### **Update Todo**

-   **Endpoint**: `PUT /api/todos/{id}`
-   **Description**: Updates the details of a specific todo.

**Request Body**:

```json
{
    "title": "Updated Todo Title",
    "description": "Updated Todo Description",
    "completed": true
}
```

**Response**:

```json
{
    "id": 1,
    "title": "Updated Todo Title",
    "description": "Updated Todo Description",
    "completed": true,
    "created_at": "2024-07-15T12:34:56.789Z"
}
```

---

### **Delete Todo**

-   **Endpoint**: `DELETE /api/todos/{id}`
-   **Description**: Deletes a specific todo by its ID.

**Response**:

```json
{
    "message": "Todo deleted successfully"
}
```
