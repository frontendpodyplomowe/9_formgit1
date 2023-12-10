$clearBtn = document.getElementById("resetForm")
$form = document.getElementById("form")

$clearBtn.addEventListener('click', () => {
  $form.reset()
})
