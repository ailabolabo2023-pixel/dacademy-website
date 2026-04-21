@echo off
echo 背景画像を配置しています...
copy "C:\Users\AIshi\.gemini\antigravity\brain\2e2bf1ad-e8ce-4a72-8d50-1ee51d547a98\strong_comic_burst_bg_1776533091083.png" "C:\Users\AIshi\.gemini\antigravity\scratch\dacademy-website\public\images\profile_bg_v2.png"
if %errorlevel% neq 0 (
    echo [ERROR] コピーに失敗しました。ファイルが既に使用中か、パスが間違っている可能性があります。
) else (
    echo [SUCCESS] 画像の配置が完了しました！
)
pause
