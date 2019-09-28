## 组件通信

### 跨组件通信

- *provide/inject*
```javascript
  // 上层组件
  provide: {
    theme: 'red'
  }
  provide () {
    return {
      theme: 'red'
    }
  }
  // 下层组件
  inject: {
    theme: {
      default: 'green'
    }
  }
  inject: ['theme']
```