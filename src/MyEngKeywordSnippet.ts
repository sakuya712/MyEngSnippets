import * as vscode from 'vscode';
export class MyEngKeywordSnippet{
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        const VbaSnippet = [
            {
                label: "First",
                kind: vscode.CompletionItemKind.User,
                insertText: new vscode.SnippetString("First"),
                detail: "First <=> End",
                documentation: new vscode.MarkdownString("始める、開始するは**Begin**"),
            },
            {
                label: "Success",
                kind: vscode.CompletionItemKind.User,
                insertText: new vscode.SnippetString("Success"),
                detail: "Success <=> Failure,Error",
                documentation: new vscode.MarkdownString("成功"),
            },
            {
                label: "Failure",
                kind: vscode.CompletionItemKind.User,
                insertText: new vscode.SnippetString("Failure"),
                detail: "Success <=> Failure",
                documentation: new vscode.MarkdownString("失敗"),
            },
            {
                label: "Column",
                kind: vscode.CompletionItemKind.User,
                insertText: new vscode.SnippetString("Column"),
                detail: "Column <=> Row",
                documentation: new vscode.MarkdownString("列"),
            },
            {
                label: "Application",
                kind: vscode.CompletionItemKind.User,
                insertText: new vscode.SnippetString("Application"),
                detail: "",
                documentation: new vscode.MarkdownString("アプリケーション"),
            },
            {
                label: "Width",
                kind: vscode.CompletionItemKind.User,
                insertText: new vscode.SnippetString("Width"),
                detail: "Width <=> Height",
                documentation: new vscode.MarkdownString("幅"),
            },
            {
                label: "Height",
                kind: vscode.CompletionItemKind.User,
                insertText: new vscode.SnippetString("Height"),
                detail: "Width <=> Height",
                documentation: new vscode.MarkdownString("高さ"),
            },
            {
                label: "Release",
                kind: vscode.CompletionItemKind.User,
                insertText: new vscode.SnippetString("Release"),
                detail: "",
                documentation: new vscode.MarkdownString("リリース、本来の意味は開放"),
            },
        ];
        let completionList = VbaSnippet.map(x => {
            const completionItem = new vscode.CompletionItem(x.label,x.kind);
            completionItem.insertText = x.insertText;
            completionItem.detail = x.detail
            completionItem.documentation = x.documentation
            return completionItem;
        });
        return Promise.resolve(completionList);
    }    
}