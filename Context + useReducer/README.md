# To-do list với context + useReducer

context + useReducer giúp tạo ra các global state, có thể truy cập được tại nhiều file, không chỉ trong riêng comp sinh ra nó

## Thư mục store

Thư mục store để lưu trữ state toàn cục cũng như các file liên quan đến cấu trúc reducer

### `File Context.js`
File Context.js tạo ra context và export nó ra ngoài

### `File Provider.js`
File Provider.js cho phép cung cấp store qua tất cả comp với context
Provider sẽ ôm ứng dụng của chúng ta qua prop children
Provider nhận 1 prop là value có giá trị truyền vào chính là global state mà ta tạo ra
Ở đây, global state mà ta tạo ra thông qua useReducer nên ta sẽ truyền vào value cả state và dispatch để tất cả comp bên dưới đều lấy được state và dispatch được action


### `File reducer.js`
File reducer.js sẽ chứa reducer và initState để truyền vào useReducer (export ra và import lại ở file Provider.js)

### `File index.js`
File index.js sẽ export những file xung quanh nó ra bên ngoài để mỗi khi bên ngoài muốn sử dụng các module bên trong store thì không cần phải truy cập nhiều mức nữa, chỉ cần truy cập vào thư mục store là được
VD: export { default as StoreProvider } from './Provider'
(xem lại bài modules trong khóa JS để hiểu kĩ hơn)
-> file ngoài sẽ import riêng từng thành phần và chỉ cần truy cập thẳng vào thư mực store
Import StoreProvider trong file index.js bên ngoài và ôm lấy comp App hay toàn bộ chương trình của chúng ta (có thể có nhiều Provider nên ta cần đặt tên riêng để import được rõ ràng)

### `File constants.js`
File constants.js để tạo ra các action và export chúng ra ngoài
-> import các constant vào file reducer.js để hàm reducer tiến hành thao tác switch giữa các action và set lại state tương ứng

### `File actions.js`
File actions.js import các constant để tạo ra function truyền vào dispatch như ta đã làm trong phần useReducer 
-> export các function trong file actions.js và import trong App.js
-> từ đó ta sẽ tiến hành thao tác dispatch action và các hàm xử lý sự kiện 

**Note: Những file kể trên chỉ là những file nằm trong phần src của project, không bao gồm các file và thư mục khác khi ta chạy lênh creat-react-app**