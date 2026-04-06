Set-Location -Path "c:\note\cheongna-nanum-blog"
try {
    # Generate the post using the local Node script
    npm run generate
    
    # Check if a new file was created
    git add content/posts/
    
    # Attempt to commit
    git commit -m "🤖 Auto-generated blog post by Windows Scheduler"
    
    # If commit was successful (i.e. changes existed), push to GitHub to trigger Vercel deployment
    if ($LASTEXITCODE -eq 0) {
        git pull --rebase origin main
        git push
        Write-Output "Successfully generated and pushed a new blog post."
    } else {
        Write-Output "No new posts to commit."
    }
} catch {
    Write-Error "Failed to run auto-post task: $_"
}
