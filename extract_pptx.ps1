Add-Type -AssemblyName 'System.IO.Compression.FileSystem'
$zip = [System.IO.Compression.ZipFile]::OpenRead("c:\Users\SNEHA K\OneDrive\Documents\Hackathon\Build_AI\Build AI.pptx")
$entries = $zip.Entries | Where-Object { $_.FullName -like 'ppt/slides/slide*.xml' } | Sort-Object { [int]([regex]::Match($_.Name, '\d+').Value) }
foreach($entry in $entries) {
    Write-Host "`n======== $($entry.FullName) ========"
    $stream = $entry.Open()
    $reader = New-Object System.IO.StreamReader($stream)
    $content = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    $matches = [regex]::Matches($content, '<a:t>([^<]+)</a:t>')
    foreach($m in $matches) {
        Write-Host $m.Groups[1].Value
    }
}
$zip.Dispose()
