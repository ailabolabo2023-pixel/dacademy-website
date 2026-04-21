@echo off
chcp 65001 > nul
set REPO_URL=https://github.com/ailabolabo2023-pixel/dacademy-website.git

echo ======================================================
echo   Dacademy Website - GitHub Backup Tool
echo ======================================================
echo.

rem Gitが初期化されているか確認
if not exist ".git" (
    echo [INFO] Gitを初期化しています...
    git init
    git remote add origin %REPO_URL%
    git branch -M main
)

echo [INFO] ファイルをステージングしています...
git add .

echo [INFO] 変更を記録しています...
git commit -m "Backup: %date% %time%"

echo [INFO] GitHubへ送信しています...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] 送信に失敗しました。
    echo ※初めての場合、ログイン画面が表示されることがあります。
    echo ※GitHub側でリポジトリが「空」であることを確認してください。
) else (
    echo.
    echo [SUCCESS] GitHubへの保存が完了しました！
)

echo.
pause
