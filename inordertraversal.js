class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function inOrderTraversal(root){
    if(root === null){
        return ;
    }
    inOrderTraversal(root.left);
    console.log(root.value);
    inOrderTraversal(root.right);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

inOrderTraversal(root);